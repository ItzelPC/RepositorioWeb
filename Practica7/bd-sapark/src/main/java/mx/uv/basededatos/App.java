package mx.uv.basededatos;
import static spark.Spark.*;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import com.google.gson.Gson;

/**
 * Hello world!
 *
 */
public class App 
{
    private static Gson gson = new Gson();
    private static Map<String, Usuarios> usuarios = new HashMap<>();
    public static void main( String[] args )
    {
        get("/usuarios", (req, res) -> gson.toJson(usuarios.values() ));
        post("/usuarios", (req, res) ->{
            String query = req.body();
            System.out.println("Peticion: " + query);
            Usuarios u = gson.fromJson(query, Usuarios.class);
            String id = UUID.randomUUID().toString();
            u.setId(id);
            usuarios.put(id, u);
            return "El id es:"+id;
        });
        System.out.println( "Hello World!" );
        
    }
}
