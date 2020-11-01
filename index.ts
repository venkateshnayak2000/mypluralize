import * as pluralize from 'pluralize'
/**
* Seventh change from intellij
* @Method: Returns the plural form of any noun.
* @Param {string}
* @Return {string}
*/
export function getPlural (str: any) : string {
  return pluralize.plural(str); //18th comment from dev branch
}
