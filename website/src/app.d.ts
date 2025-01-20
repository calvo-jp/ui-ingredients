declare global {
  namespace App {
    interface TocEntry {
      title: string;
      url: string;
      items: TocEntry[];
    }

    interface PageData {
      toc: TocEntry[];
    }
  }
}

export {};
