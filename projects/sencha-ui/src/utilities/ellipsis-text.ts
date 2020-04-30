export interface SenchaEllipsisTextConfig {
  length?: number;
  keepWord?: 'before' | 'after' | 'no';
}

export class SenchaEllipsisText {
  private config: SenchaEllipsisTextConfig = {
    length: 50,
    keepWord: 'after',
  };
  private textOriginal: string;
  private textShorten: string;

  constructor(text: string, config?: SenchaEllipsisTextConfig) {
    this.textOriginal = text;
    this.applyConfig(config);
    this.textShorten = this.truncateText(text);
  }

  public getOriginalText() {
    return this.textOriginal;
  }

  public getShortenText() {
    return this.textShorten;
  }

  private applyConfig(config: SenchaEllipsisTextConfig) {
    if (config) {
      this.config = Object.assign(this.config, config);
    }
  }

  private truncateText(text: string) {
    if (this.config.keepWord === 'no') {
      return this.truncateWithoutKeepingWords(text, this.config.length);
    } else {
      return this.truncateKeepWord(
        text,
        this.config.length,
        this.config.keepWord
      );
    }
  }

  private truncateWithoutKeepingWords(text: string, length: number) {
    return text.length > length ? text.substr(0, length) : text;
  }

  private truncateKeepWord(
    text: string,
    length: number,
    direction: 'before' | 'after'
  ) {
    if (text.length < length) {
      return text;
    }
    if (direction === 'before') {
      const trimmed = text.substr(0, length);
      const lastSpace = trimmed.lastIndexOf(' ');
      return lastSpace === -1
        ? trimmed
        : trimmed.substr(0, Math.min(trimmed.length, lastSpace));
    }
    const replacer = new RegExp(`^(.{${length}}[^\\s]*).*`);
    return text.replace(replacer, '$1');
  }
}
