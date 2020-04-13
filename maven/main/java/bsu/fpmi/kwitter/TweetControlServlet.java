package bsu.fpmi.kwitter;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.Scanner;

@WebServlet(urlPatterns = {"/tweets", "/tweets/search", "/tweets/edit",
        "/tweets/like", "/tweets/unlike", "/tweets/getAll"})
public class TweetControlServlet extends HttpServlet {
    private PostCollection posts;
    private static final String  INPUT_FILE_PATH = "resources/input.txt";
    private static final String NONEXISTENT_POST_ID = "-1";

    @Override
    public void init() throws ServletException {
        posts = new PostCollection();

        StringBuilder json = new StringBuilder();

        InputStream inputStream = getServletContext().getResourceAsStream(INPUT_FILE_PATH);
        Scanner scanner = new Scanner(inputStream);

        while (scanner.hasNext()) {
            json.append(scanner.nextLine());
        }

        PostCollection.fromJson(posts, json.toString());
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id");
        PrintWriter writer = resp.getWriter();
        resp.setContentType("application/json");

        if (id == null) {
            id = NONEXISTENT_POST_ID;
        }

        Gson gson = new Gson();
        writer.write(gson.toJson(posts.getById(Integer.parseInt(id))));
        writer.close();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        Gson gson = new Gson();
        StringBuilder stringBuilder = new StringBuilder();
        BufferedReader bufferedReader = req.getReader();
        String line;
        while ((line = bufferedReader.readLine()) != null) {
            stringBuilder.append(line);
        }
        System.out.println(stringBuilder.toString());
        Post post;
        try {
           post = gson.fromJson(stringBuilder.toString(), new TypeToken<Post>(){}.getType());
        } catch (com.google.gson.JsonSyntaxException e) {
            e.printStackTrace();
            return;
        }


        PrintWriter writer = resp.getWriter();

        HttpServletRequest httpRequest = (HttpServletRequest)req;

        String id = req.getParameter("id");
        if (id == null) {
            id = NONEXISTENT_POST_ID;
        }

        String userName = req.getParameter("userName");

        switch (httpRequest.getServletPath()) {
            case "/tweets/search": {
                PostCollection filterResult = posts.getPosts(post);
                for (int i = 0; i < filterResult.size(); ++i) {
                    writer.write(gson.toJson(filterResult.get(i)));
                }
                break;
            }

            case "/tweets/edit": {
                writer.write(gson.toJson(posts.editById(Integer.parseInt(id), post)));
            }

            case "/tweets/like": {
                boolean result;
                if (userName == null) {
                    result = false;
                } else {
                    result = posts.likePost(Integer.parseInt(id), userName);
                }
                writer.write(gson.toJson(result));
                break;
            }

            case "/tweets/unlike": {
                boolean result;
                if (userName == null) {
                    result = false;
                } else {
                    result = posts.unlikePost(Integer.parseInt(id), userName);
                }
                writer.write(gson.toJson(result));
                break;
            }

            case "/tweets/getAll": {
                for (int i = 0; i < posts.size(); ++i) {
                    writer.write(gson.toJson(posts.get(i)));
                }
                break;
            }

            default: {
                break;
            }
        }

        writer.close();
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id");
        resp.setContentType("application/json");

        if (id == null) {
            id = NONEXISTENT_POST_ID;
        }

        PrintWriter writer = resp.getWriter();
        boolean result = posts.remove(Integer.parseInt(id));
        writer.write("{\"success\":" + result + '}');
        writer.close();
    }
}
