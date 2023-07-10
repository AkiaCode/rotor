//@rotor
class App {
    num: number;
    
    constructor() {
        this.num = 1
    }

    "/"(req: Request) {
        return new Response(`User-Agent: ${req.headers.get('User-Agent')}`);
    }   
}
