export class FormatString{
  public static attNotFound: string = "*******";

  public static capitalizeFirst(string: string): string {
    return  string.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  }

  public static elementsToPascalCase(array: Array<string>): Array<string>{
    let arrayTransform: Array<string> = [];
    array.forEach(value => {
      arrayTransform.push(FormatString.capitalizeFirst(value));
    });
    return arrayTransform;
  }

  public static getAtt(att: string | undefined): string {
    if (att !== null && att !== undefined && att !== "") {
      return att.toString()
    }
    return FormatString.attNotFound;
  }
}
