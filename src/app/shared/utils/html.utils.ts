export class HtmlUtils {
  public static isMobileDevice(): boolean {
    let isMobile = false;
    const windowWidth: number = window.innerWidth;
    const userAgent = navigator.userAgent;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(userAgent) || windowWidth < 992){
      isMobile = true;
    }

    return isMobile;
  }

  public static scrollTop(): void{
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  public static scrollBottomTimeout(time:number): void{
    setTimeout(() => {
      window.scrollTo({
        top: 2000,
        behavior: "smooth"
      })
    }, time);
  }

  public static previusPage(): void{
    window.history.back();
  }

  public static addClassToElement(elementId:string, className:string): void {
    const element = document.getElementById(elementId);
    element?.classList.add(className);
  }

  public static removeClassFromElement(elementId:string, className:string): void {
    const element = document.getElementById(elementId);
    element?.classList.remove(className);
  }

  public static scaleElementTo(elementId:string, scaleNumber:number): void {
    const element = document.getElementById(elementId);
    if (element){
      element.style.transform = `scale(${scaleNumber})`;
    }
  }
}
