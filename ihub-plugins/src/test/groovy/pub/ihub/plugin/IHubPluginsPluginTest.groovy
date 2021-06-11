/*
 * Copyright (c) 2021 Henry 李恒 (henry.box@outlook.com).
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package pub.ihub.plugin

import groovy.util.logging.Slf4j
import org.gradle.internal.impldep.org.junit.Rule
import org.gradle.internal.impldep.org.junit.rules.TemporaryFolder
import org.gradle.testkit.runner.GradleRunner
import spock.lang.Specification
import spock.lang.Title

import static java.io.File.separator
import static org.gradle.api.Project.DEFAULT_BUILD_FILE
import static org.gradle.internal.impldep.org.apache.ivy.util.FileUtil.copy
import static org.gradle.internal.impldep.org.codehaus.plexus.util.FileUtils.copyDirectoryStructure
import static org.gradle.internal.impldep.org.codehaus.plexus.util.FileUtils.copyFile
import static org.gradle.internal.impldep.org.codehaus.plexus.util.FileUtils.getFile
import static org.gradle.internal.impldep.org.eclipse.jgit.lib.Constants.OS_USER_DIR
import static org.gradle.testkit.runner.GradleRunner.create
import static org.gradle.testkit.runner.TaskOutcome.SUCCESS



/**
 * @author henry
 */
@Slf4j
@Title('IHubPluginsPlugin测试套件')
@SuppressWarnings(['PrivateFieldCouldBeFinal', 'JUnitPublicNonTestMethod'])
class IHubPluginsPluginTest extends Specification {

    @Rule
    private TemporaryFolder testProjectDir = new TemporaryFolder()
    private GradleRunner gradleBuilder
    private File propertiesFile

    def setup() {
        testProjectDir.create()
        gradleBuilder = create().withProjectDir(testProjectDir.root).withPluginClasspath()
        propertiesFile = testProjectDir.newFile('gradle.properties')
        copy getClass().classLoader.getResourceAsStream('testkit-gradle.properties'), propertiesFile, null
    }

    def cleanup() {
        testProjectDir.delete()
    }

    def 'basic build test'() {
        setup:
        testProjectDir.newFile('build.gradle') << """
            plugins {
                id 'pub.ihub.plugin'
            }
        """

        when:
        def result = gradleBuilder.build()

        then:
        result.output.contains 'BUILD SUCCESSFUL'
    }

    def 'complete build test'() {
        setup:
        File buildFile = testProjectDir.newFile('build.gradle')
        buildFile << """
            plugins {
                id 'pub.ihub.plugin'
            }
        """

        when:
        testProjectDir.newFile('settings.gradle') << 'include \'a\', \'b\', \'c\''
        testProjectDir.newFolder 'a'
        testProjectDir.newFolder 'b'
        testProjectDir.newFolder 'c'
        testProjectDir.newFile('a/gradle.properties') << '''
version=1.0.0
javaCompatibility=8
publishNeedSign=true
signingKeyId=id
signingSecretKey=secret
signingPassword=password
publishDocs=true
'''
        propertiesFile << '''
mavenLocalEnabled=true
release.repo.url=http://ihub.pub/nexus/content/repositories/releases
snapshot_repo_url=http://ihub.pub/nexus/content/repositories/snapshots
customize-repo-url=http://ihub.pub/nexus/content/repositories
repoAllowInsecureProtocol=true
repoIncludeGroupRegex=pub\\.ihub\\..*
'''
        buildFile << """
            subprojects {
                apply {
                    plugin 'pub.ihub.plugin.ihub-groovy'
                    plugin 'pub.ihub.plugin.ihub-publish'
                    plugin 'pub.ihub.plugin.ihub-test'
                    plugin 'pub.ihub.plugin.ihub-verification'
                    plugin 'pub.ihub.plugin.ihub-native'
                }
            }

            iHubBom {
                importBoms {
                    group 'cn.hutool' module 'hutool-bom' version '5.6.4'
                }
                dependencyVersions {
                    group 'cn.hutool' modules 'core', 'aop' version '5.6.4'
                }
                groupVersions {
                    group 'cn.hutool' version '5.6.4'
                }
                excludeModules {
                    group 'cn.hutool' modules 'core'
                    group 'pub.ihub'
                }
                dependencies {
                    api ':a', ':b', ':c'
                }
            }
        """
        testProjectDir.newFolder 'libs'
        def result = gradleBuilder.withArguments('-DrepoUsername=username', '-DrepoPassword=password').build()

        then:
        result.output.contains('flatDir')
        result.output.contains('MavenLocal')
        result.output.contains('ReleaseRepo')
        result.output.contains('SnapshotRepo')
        result.output.contains('CustomizeRepo')
        result.task(':help').outcome == SUCCESS
    }

    def '代码检查插件测试'() {
        setup: '初始化项目'
        copyProject 'groovy-sample', 'src'
        testProjectDir.newFile('settings.gradle') << 'rootProject.name = \'groovy-sample\''

        when: '构建项目'
        def result = gradleBuilder.withArguments('build').build()

        then: '检查结果'
        result.output.contains '┌──────────────────────────────────────────────────────────────────────────────────────────────────┐'
        result.output.contains '│                               GROOVY-SAMPLE Jacoco Report Coverage                               │'
        result.output.contains '├──────────────────────┬──────────────────┬──────────────────┬──────────────────┬──────────────────┤'
        result.output.contains '│ Type                 │ Total            │ Missed           │ Covered          │ Coverage         │'
        result.output.contains '├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼──────────────────┤'
        result.output.contains '│ INSTRUCTION          │ 13               │ 0                │ 13               │ 100.00%          │'
        result.output.contains '│ BRANCH               │ 0                │ 0                │ 0                │ n/a              │'
        result.output.contains '│ LINE                 │ 1                │ 0                │ 1                │ 100.00%          │'
        result.output.contains '│ COMPLEXITY           │ 1                │ 0                │ 1                │ 100.00%          │'
        result.output.contains '│ METHOD               │ 1                │ 0                │ 1                │ 100.00%          │'
        result.output.contains '│ CLASS                │ 1                │ 0                │ 1                │ 100.00%          │'
        result.output.contains '└──────────────────────┴──────────────────┴──────────────────┴──────────────────┴──────────────────┘'
        result.output.contains '┌──────────────────────────────────────────────────────────────────────────────────────────────────┐'
        result.output.contains '│                                      Jacoco Report Coverage                                      │'
        result.output.contains '├────────────────────────────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┤'
        result.output.contains '│ Project                        │ Instruct │ Branch   │ Line     │ Cxty     │ Method   │ Class    │'
        result.output.contains '├────────────────────────────────┼──────────┼──────────┼──────────┼──────────┼──────────┼──────────┤'
        result.output.contains '│ groovy-sample                  │ 100.00%  │ n/a      │ 100.00%  │ 100.00%  │ 100.00%  │ 100.00%  │'
        result.output.contains '│ total                          │ 100.00%  │ n/a      │ 100.00%  │ 100.00%  │ 100.00%  │ 100.00%  │'
        result.output.contains '└────────────────────────────────┴──────────┴──────────┴──────────┴──────────┴──────────┴──────────┘'
        result.task(':codenarcMain').outcome == SUCCESS
        result.task(':codenarcTest').outcome == SUCCESS
        result.task(':test').outcome == SUCCESS
        result.task(':jacocoTestReport').outcome == SUCCESS
        result.task(':jacocoTestCoverageVerification').outcome == SUCCESS
        result.output.contains 'BUILD SUCCESSFUL'
    }

    def '多项目构建测试'() {
        setup: '初始化项目'
        copyProject 'multi-sample', 'rest', 'service', 'sdk'
        testProjectDir.newFile('settings.gradle') << '''
            rootProject.name = 'multi-sample'
            include 'rest', 'service', 'sdk'
            project(':rest').name = 'multi-sample-rest'
            project(':service').name = 'multi-sample-service'
            project(':sdk').name = 'multi-sample-sdk'
        '''

        when: '构建项目'
        def result = gradleBuilder.withArguments('build').build()

        then: '检查结果'
        result.task(':multi-sample-rest:pmdMain').outcome == SUCCESS
        result.task(':multi-sample-rest:pmdTest').outcome == SUCCESS
        result.task(':multi-sample-rest:test').outcome == SUCCESS
        result.task(':multi-sample-rest:jacocoTestReport').outcome == SUCCESS
        result.task(':multi-sample-rest:jacocoTestCoverageVerification').outcome == SUCCESS
        result.output.contains 'BUILD SUCCESSFUL'
    }

    private void copyProject(String name, String... dirs) {
        "${getFile(System.getProperty(OS_USER_DIR)).parentFile.path + separator}samples$separator$name".with {
            copyFile getFile(it + separator + DEFAULT_BUILD_FILE), testProjectDir.newFile(DEFAULT_BUILD_FILE)
            dirs.each { dir ->
                copyDirectoryStructure getFile(it + separator + dir), testProjectDir.newFolder(dir)
            }
        }
    }

}