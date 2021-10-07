export class FeatureCard {
    public imagePath: string = '';
    public cardTitle: string = '';
    public cardContent: string = '';
    public cardActionText: string = '';
    public cardActionRoute: string = '';

    constructor(imagePath?: string, cardTitle?: string, cardContent?: string, cardActionText?: string, cardActionRoute?: string) {
        if (imagePath) {
            this.imagePath = imagePath;
        }
        if (cardTitle) {
            this.cardTitle = cardTitle;
        }
        if (cardContent) {
            this.cardContent = cardContent;
        }
        if (cardActionText) {
            this.cardActionText = cardActionText;
        }
        if (cardActionRoute) {
            this.cardActionRoute = cardActionRoute;
        }
    }
}