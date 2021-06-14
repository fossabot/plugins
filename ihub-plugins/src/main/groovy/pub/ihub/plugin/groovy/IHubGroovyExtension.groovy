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
package pub.ihub.plugin.groovy

import groovy.transform.TupleConstructor
import pub.ihub.plugin.IHubProjectExtension



/**
 * Groovy插件扩展
 * @author liheng
 */
@TupleConstructor(includeSuperFields = true)
class IHubGroovyExtension extends IHubProjectExtension {

    List<String> getModules() {
        findProperty('groovyAllModules', false) ? ['groovy-all'] : [
            'groovy',
            'groovy-datetime',
            'groovy-dateutil',
            'groovy-groovydoc',
            'groovy-json',
            'groovy-nio',
            'groovy-sql',
            'groovy-templates',
            'groovy-xml',
        ]
    }

}
