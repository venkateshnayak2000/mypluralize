import * as pluralize from 'pluralize'
/**
* Eight  change from intellij client
* @Method: Returns the plural form of any noun.
* @Param {string}
* @Return {string}
*/
export function getPlural (str: any) : string {
  return pluralize.plural(str); //9th server comment
}
