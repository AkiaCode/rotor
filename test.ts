//@rotor
class AppS {
    "/"(req: Request) {
        return new Response(`User-Agent: ${req.headers.get('User-Agent')}`);
    }   
}