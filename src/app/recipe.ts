export class recipe {
    id: string
    name: string;
    directions: string;
    ingredients: string;
    photo: string;
    
    constructor(name: string, directions: string, ingredients: string, photo: string) {
        let temp = '';
        const Characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for(let i = 0; i < 10; i++) {
          const randomIndex = Math.floor(Math.random() * Characters.length);
           temp += Characters.charAt(randomIndex)
        }
        this.id = temp;
        this.name = name;
        this.directions = directions;
        this.ingredients = ingredients;
        this.photo = photo;
    }

}