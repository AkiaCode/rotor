//@rotor
class App {
    "/"(req: Request) {
        return new Response(`User-Agent: ${req.headers.get('User-Agent')}`);
    }   
}
