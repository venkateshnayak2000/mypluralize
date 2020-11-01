import * as pluralize from 'pluralize'
/**
* First change from intellij
* @Method: Returns the plural form of any noun.
* @Param {string}
* @Return {string}
*/
export function getPlural (str: any) : string {
  return pluralize.plural(str); //Updated semicolon
}
