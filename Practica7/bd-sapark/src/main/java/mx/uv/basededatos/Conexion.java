package mx.uv.basededatos;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    private static String url="jdbc:mysql://127.0.0.1:3306/sw2020";
    private static String driveName="com.mysql.jdbc.Driver";
    private static String userName="root";
    private static String password="";
    private static Connection con=null;

    public static Connection getConnection(){
        try{
            Class.forName(driveName);
            con = DriverManager.getConnection(url, userName, password);
            System.out.println("Sucess Connection");
        }catch(SQLException e){
            System.out.println("Error: "+e.getMessage());
        }catch(ClassNotFoundException e){
            System.out.println("Error: "+e.getMessage());
        }
        return con;
    }

    
}
