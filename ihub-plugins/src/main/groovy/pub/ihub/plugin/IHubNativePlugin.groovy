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

import org.gradle.api.Plugin
import org.gradle.api.Project



/**
 * IHub Spring Native Plugin
 * @author henry
 */
class IHubNativePlugin implements Plugin<Project> {

	@Override
	void apply(Project project) {
		project.pluginManager.apply IHubBootPlugin
		project.pluginManager.apply 'org.springframework.experimental.aot'

		project.bootBuildImage {
			builder = 'paketobuildpacks/builder:tiny'
			environment = [
				BP_JVM_VERSION : '11',
				BP_NATIVE_IMAGE: 'true'
			]
		}

	}

}