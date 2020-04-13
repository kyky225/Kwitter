package bsu.fpmi.kwitter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/get")
public class GetServlet extends HttpServlet {

    final String lengthLimitExceededText = "length of name more than 100 symbols";
    final int maxLength = 100;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        String name = req.getParameter("name");
        PrintWriter stream = resp.getWriter();
        if (name != null) {
            if (name.length() > maxLength) {
                stream.print(lengthLimitExceededText);
            }
            else {
                stream.print("Name is " + name);
            }
        }
    }
}
