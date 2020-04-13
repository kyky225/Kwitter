package bsu.fpmi.kwitter;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.util.Scanner;

@WebServlet("/page")
public class PageServlet extends HttpServlet {
    public static final String pagePath = "webapp/page.html";

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        InputStream test = getServletContext().getResourceAsStream(pagePath);
        Scanner scanner = new Scanner(test);
        while (scanner.hasNext()) {
            resp.getWriter().write(scanner.nextLine());
        }
        scanner.close();
    }

}
