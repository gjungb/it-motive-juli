/**
 * Ein Buch
 */
export interface Book {
    title: string;
    subtitle?: string;
    /**
     * Die ISBN
     * @link https://de.wikipedia.org/wiki/Internationale_Standardbuchnummer
     */
    isbn: string;
    abstract?: string;
    /**
     * Die Anzahl der Seiten
     */
    numPages: number;

    author: string;

    publisher: unknown;
}
