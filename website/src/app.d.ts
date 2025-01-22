declare global {
  namespace App {
    interface TocEntry {
      url: string;
      title: string;
      items: TocEntry[];
    }

    interface PageData {
      toc: TocEntry[];
    }
  }
}

export {};
