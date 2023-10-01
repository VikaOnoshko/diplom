import './index.less';

export class Confettiful {
  private containerEl: HTMLElement | null;
  private confettiColors: string[];
  private confettiAnimations: string[];

  constructor(private readonly el: HTMLElement) {
    this.containerEl = null;

    this.confettiColors = [
      '#EF2964',
      '#00C09D',
      '#2D87B0',
      '#48485E',
      '#EFFF1D',
    ];
    this.confettiAnimations = ['slow', 'medium', 'fast'];

    this.setupElements();
    this.renderConfetti();
  }

  private setupElements() {
    const containerEl = document.createElement('div');

    this.el.style.position = 'relative';

    containerEl.classList.add('confetti-container');

    this.el.appendChild(containerEl);

    this.containerEl = containerEl;
  }

  private renderConfetti() {
    window.setInterval(() => {
      const confettiEl = document.createElement('div');
      const confettiSize = Math.floor(Math.random() * 3) + 7 + 'px';
      const confettiBackground =
        this.confettiColors[
          Math.floor(Math.random() * this.confettiColors.length)
        ];
      const confettiLeft =
        Math.floor(Math.random() * this.el.offsetWidth) + 'px';
      const confettiAnimation =
        this.confettiAnimations[
          Math.floor(Math.random() * this.confettiAnimations.length)
        ];

      confettiEl.classList.add(
        'confetti',
        'confetti--animation-' + confettiAnimation,
      );
      confettiEl.style.left = confettiLeft;
      confettiEl.style.width = confettiSize;
      confettiEl.style.height = confettiSize;
      confettiEl.style.backgroundColor = confettiBackground;

      setTimeout(function () {
        confettiEl.parentNode?.removeChild(confettiEl);
      }, 3000);

      this.containerEl?.appendChild(confettiEl);
    }, 25);
  }
}
