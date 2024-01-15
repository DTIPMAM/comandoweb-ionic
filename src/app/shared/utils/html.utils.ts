// Classe utilitária com métodos para manipulação de elementos HTML e funcionalidades relacionadas ao HTML

export class HtmlUtils {

  // Verifica se o dispositivo é móvel com base no tamanho da janela e no agente do usuário
  public static isMobileDevice(): boolean {
    let isMobile = false;
    const windowWidth: number = window.innerWidth;
    const userAgent = navigator.userAgent;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(userAgent) || windowWidth < 992){
      isMobile = true;
    }

    return isMobile;
  }

  // Faz um scroll suave para o topo da página
  public static scrollTop(): void{
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Faz um scroll suave para a parte inferior da página após um determinado tempo
  public static scrollBottomTimeout(time:number): void{
    setTimeout(() => {
      window.scrollTo({
        top: 2000,
        behavior: "smooth"
      })
    }, time);
  }

  // Navega para a página anterior no histórico do navegador
  public static previusPage(): void{
    window.history.back();
  }

  // Adiciona uma classe a um elemento HTML com base no ID do elemento
  public static addClassToElement(elementId:string, className:string): void {
    const element = document.getElementById(elementId);
    element?.classList.add(className);
  }

  // Remove uma classe de um elemento HTML com base no ID do elemento
  public static removeClassFromElement(elementId:string, className:string): void {
    const element = document.getElementById(elementId);
    element?.classList.remove(className);
  }

  // Aplica uma escala de transformação a um elemento HTML com base no ID do elemento
  public static scaleElementTo(elementId:string, scaleNumber:number): void {
    const element = document.getElementById(elementId);
    if (element){
      element.style.transform = `scale(${scaleNumber})`;
    }
  }
}
