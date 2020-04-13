package bsu.fpmi.kwitter;

import java.util.ArrayList;
import java.util.Date;

public class Post {
    private final int id;
    private final long createdAt;
    private String description;
    private final String author;
    private ArrayList<String> photoLinks;
    private ArrayList<String> likes;
    private ArrayList<String> hashtags;

    public Post() {
        id = -1;
        createdAt = new Date().getTime();
        author = "";
        description = "";
        photoLinks = new ArrayList<>();
        likes = new ArrayList<>();
        hashtags = new ArrayList<>();
    }

    public Post(int id, long createdAt, String description, String author, ArrayList<String> photoLinks,
                ArrayList<String> likes, ArrayList<String> hashtags) {
        this.id = id;
        this.createdAt = createdAt;
        this.description = description;
        this.author = author;
        this.likes = likes;
        this.hashtags = hashtags;
        this.photoLinks = photoLinks;
    }

    int getId() {
        return id;
    }

    String getAuthor() {
        return author;
    }

    String getDescription() {
        return description;
    }

    long getCreateAt() {
        return createdAt;
    }

    ArrayList<String> getLikes() {
        return likes;
    }

    ArrayList<String> getHashtags() {
        return hashtags;
    }

    ArrayList<String> getPhotoLinks() {
        return photoLinks;
    }

    void setDescription(String description) {
        this.description = description;
    }

    void setLikes(ArrayList<String> likes) {
        this.likes = likes;
    }

    void setHashtags(ArrayList<String> hashtags) {
        this.hashtags = hashtags;
    }

    void setPhotoLinks(ArrayList<String> photoLinks) {
        this.photoLinks = photoLinks;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", createdAt=" + createdAt +
                ", description='" + description + '\'' +
                ", author='" + author + '\'' +
                ", photoLinks=" + photoLinks +
                ", likes=" + likes +
                ", hashtags=" + hashtags +
                '}';
    }
}