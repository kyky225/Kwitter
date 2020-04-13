package bsu.fpmi.kwitter;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.util.ArrayList;
import java.util.List;



public class PostCollection {

    private ArrayList<Post> collection;

    public PostCollection() {
        this.collection = new ArrayList<Post>();
    }

    public PostCollection(ArrayList<Post> collection) {
        this.collection = collection;
    }

    public static void fromJson(PostCollection postCollection, String json) {
        Gson gson = new Gson();
        postCollection.collection = gson.fromJson(json, new TypeToken<List<Post>>(){}.getType());
    }

    public static String toJson(PostCollection collection) {
        Gson gson = new Gson();
        return gson.toJson(collection);
    }

    public int size() {
        return collection.size();
    }

    public Post get(int index) {
        return collection.get(index);
    }

    public boolean match(Post post, Post filterConfig) {
        if (filterConfig.getId() != -1 && post.getId() != filterConfig.getId()
                || !filterConfig.getAuthor().equals("") && !filterConfig.getAuthor().equals(post.getAuthor())
                || filterConfig.getCreateAt() != 0 && filterConfig.getCreateAt() < post.getCreateAt()
                || !post.getDescription().contains(filterConfig.getDescription()))
            return false;

        if (filterConfig.getLikes() != null) {
            for (String like : filterConfig.getLikes()) {
                if (!post.getLikes().contains(like)) {
                    return false;
                }
            }
        }

        if (filterConfig.getHashtags() != null) {
            for (String hashtag : filterConfig.getHashtags()) {
                if (!post.getLikes().contains(hashtag)) {
                    return false;
                }
            }
        }

        return true;
    }

    public void add(Post post) {
        collection.add(post);
    }

    public boolean remove(int postID) {
        for (int i = 0; i < collection.size(); ++i) {
            if (collection.get(i).getId() == postID) {
                collection.remove(i);
                return true;
            }
        }
        return false;
    }

    public Post getById(int postID) {
        for (Post post: collection) {
            if (post.getId() == postID) {
                return post;
            }
        }
        return null;
    }

    public boolean editById(int postID, Post newFields) {
        for (Post post : collection) {
            if (post.getId() == postID) {

                if (newFields.getHashtags() != null) {
                    post.setHashtags(newFields.getHashtags());
                }
                if (newFields.getLikes() != null) {
                    post.setLikes(newFields.getLikes());
                }

                if (newFields.getPhotoLinks() != null) {
                    post.setPhotoLinks(newFields.getPhotoLinks());
                }

                if (!newFields.getDescription().equals("")) {
                    post.setDescription(newFields.getDescription());
                }

                return true;
            }
        }
        return false;
    }

    public boolean likePost(int postID, String userName) {
        for (Post post : collection) {
            if (post.getId() == postID) {
                if (post.getLikes().contains(userName)){
                    return false;
                } else {
                    post.getLikes().add(userName);
                    return true;
                }
            }
        }
        return false;
    }

    public boolean unlikePost(int postID, String userName) {
        for (Post post : collection) {
            if (post.getId() == postID) {
                if (post.getLikes().contains(userName)){
                    post.getLikes().remove(userName);
                    return true;
                } else {
                    return false;
                }
            }
        }
        return false;
    }

    public PostCollection getPosts(Post filterConfig) {
        PostCollection result = new PostCollection();
        for (Post post : this.collection) {
            if (match(post, filterConfig)) {
                result.collection.add(post);
            }
        }
        return result;

    }

    @Override
    public String toString() {
        return "PostCollection{" +
                "collection=" + collection +
                '}';
    }
}

