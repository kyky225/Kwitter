'use strict';
const Boost = (function() {
    let posts = [
        {
            id: '1',
            description: 'super desc 1',
            createdAt: new Date('2000-03-17T12:12:12'),
            author: 'Agent1',
            photoLinks: ['https://en.wikipedia.org/wiki/Joseph_Stalin#/media/File:Stalin_Full_Image.jpg'],
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '2',
            description: 'super desc 2',
            createdAt: new Date('2001-03-17T12:12:12'),
            author: 'Agent2',
            likes: ['Peter', 'Arnold'],
            hashTags: ['USA']
        },
        {
            id: '3',
            description: 'super desc 1',
            createdAt: new Date('2003-03-17T12:12:12'),
            author: 'Agent3',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '4',
            description: 'super desc 1',
            createdAt: new Date('2004-03-17T12:12:12'),
            author: 'Agent4',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '5',
            description: 'super desc 5',
            createdAt: new Date('2005-03-17T12:12:12'),
            author: 'Agent5',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '6',
            description: 'super desc 6',
            createdAt: new Date('2006-03-17T12:12:12'),
            author: 'Agent6',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '7',
            description: 'super desc 7',
            createdAt: new Date('2007-03-17T12:12:12'),
            author: 'Agent7',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '8',
            description: 'super desc 8',
            createdAt: new Date('2008-03-17T12:12:12'),
            author: 'Agent8',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '9',
            description: 'super desc 9',
            createdAt: new Date('2009-03-17T12:12:12'),
            author: 'Agent9',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '10',
            description: 'super desc 10',
            createdAt: new Date('2010-03-17T12:12:12'),
            author: 'Agent 10',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '11',
            description: 'super desc 11',
            createdAt: new Date('2011-03-17T12:12:12'),
            author: 'Agent 11',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '12',
            description: 'super desc 12',
            createdAt: new Date('2012-03-17T12:12:12'),
            author: 'Agent 12',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '13',
            description: 'super desc 13',
            createdAt: new Date('2013-03-17T12:12:12'),
            author: 'Agent 13',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '14',
            description: 'super desc 14',
            createdAt: new Date('2014-03-17T12:12:12'),
            author: 'Agent 14',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '15',
            description: 'super desc 15',
            createdAt: new Date('2015-03-17T12:12:12'),
            author: 'Agent 15',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '16',
            description: 'super desc 16',
            createdAt: new Date('2016-03-17T12:12:12'),
            author: 'Agent 16',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '17',
            description: 'super desc 17',
            createdAt: new Date('2017-03-17T12:12:12'),
            author: 'Agent 17',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '18',
            description: 'super desc 18',
            createdAt: new Date('2018-03-17T12:12:12'),
            author: 'Agent 18',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '19',
            description: 'super desc 19',
            createdAt: new Date('2019-03-17T12:12:12'),
            author: 'Agent 19',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '20',
            description: 'super desc 20',
            createdAt: new Date('2020-03-17T12:12:12'),
            author: 'Agent 20',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        }
    ];

    const requiredProperties = [
        'id',
        'description',
        'createdAt',
        'author'
    ];

    const optionalProperties = [
        'likes',
        'photoLinks',
        'hashTags'
    ];

    const allProperties = [
        'likes',
        'photoLinks',
        'hashTags',
        'id',
        'description',
        'createdAt',
        'author'
    ];

    class PostCollection {
        _posts;
        constructor(initialPosts) {
            if (Array.isArray(initialPosts) && initialPosts.every(PostCollection._validatePost)) {
                this._posts = initialPosts;
            } else {
                this._posts = undefined;
            }
        }

        getByIndex(index) {
            if (typeof index === "number")
                return this._posts[index];
            return null;
        }

        getPostsAmount() {
            return this._posts.length;
        }



        get(id) {
            if (id && typeof id === 'string') {
                return this._posts.find(item => item.id === id);
            }
            return undefined;
        }


        getPage(skip = 0, top = 10, filterConfig) {
            this._posts.sort(PostCollection._compareDates);
            PostCollection._validateFilterConfig(filterConfig);
            return this._posts.filter(PostCollection._match, filterConfig);
        }

        edit(id, post) {
            if (!PostCollection._validateProperties(post)) {
                return false;
            }
            for (let i = 0; i < posts.length; ++i) {
                if (this._posts[i].id === id) {
                    let tmpKeys = Object.keys(post);
                    for (let index = 0; index < tmpKeys.length; ++index) {
                        let key =  tmpKeys[index];
                        this._posts[i][key] = post[key];
                    }
                    return true;
                }
            }
            return false;
        }

        add(post) {
            if (!PostCollection._validatePost(post)) {
                return false;
            }
            this._posts.push(post);
            return true;
        }

        remove(id) {
            if (typeof id !== 'string') {
                return false;
            }

            let removePostIndex = this._posts.findIndex(item => item.id === id);
            if (removePostIndex === -1) {
                return false;
            }
            this._posts.splice(removePostIndex, 1);
            return true;
        }

        addAll(posts) {
            let badPosts = [];
            if (!Array.isArray(posts)) {
                return undefined;
            }
            for (let index = 0; index < posts.length; ++index) {
                if (PostCollection._validatePost(posts[index])) {
                    this._posts.push(posts[index]);
                } else {
                    badPosts.push(posts[index]);
                }
            }
            return badPosts;
        }

        clear() {
            this._posts.length = 0;
        }

        likePost(postID, userName) {
            let post = this._posts[(this._posts.findIndex(item => item.id === postID))];
            if (post["likes"].find(userName)) {
                return false;
            }
            post["likes"].add(userName);
            return true;
        }


        static _validateProperties(post) {
            if (typeof post !== 'object') {
                return false;
            }
            for (let property in post) {
                if (post.hasOwnProperty(property)) {
                    switch (property) {
                        case 'description': {
                            if (typeof post[property] !== 'string') {
                                return false;
                            }
                            break;
                        }
                        case 'hashTags':
                        case 'photoLinks': {
                            if (!Array.isArray(post[property])
                                || !post[property].every(function (element) {
                                    return typeof element === 'string';
                                })) {
                                return false;
                            }
                            break;
                        }

                        default: {
                            return false;
                        }
                    }
                }
            }
            return true;
        }

        static _match(element, index, array) {
            for (let property in this) {
                if (this.hasOwnProperty(property)) {
                    switch (property) {
                        case 'likes':
                        case 'hashTags': {
                            for (let filterElem in this[property]) {
                                if (!element[property].find(arrayElem => arrayElem === filterElem)) {
                                    return false;
                                }
                            }
                            break;
                        }
                        case 'createdAt': {
                            if (element[property].getTime() > this[property].getTime()) {
                                return false;
                            }
                            break;
                        }
                        default: {
                            if (!element.hasOwnProperty(property) || element[property] !== this[property]) {
                                return false;
                            }
                            break;
                        }
                    }
                }
            }
            return true;
        }

        static _compareDates(a, b) {
            return b.createdAt - a.createdAt;
        }

        static _validatePost(post) {
            if (typeof post !== 'object') {
                return false;
            }
            let optionalFieldAmount = 0;

            for (let index = 0; index < requiredProperties.length; ++index) {
                let property = requiredProperties[index];
                if (!post.hasOwnProperty(property)) {
                    return false;
                }
                switch (property) {
                    case 'id':
                    case 'description':
                    case 'author': {
                        if (typeof post[property] !== 'string') {
                            return false;
                        }
                        break;
                    }
                    case 'createdAt': {
                        if (!(post[property] instanceof  Date)) {
                            return false;
                        }
                        break;
                    }
                    default:
                        break;
                }
            }

            for (let index = 0; index < optionalProperties.length; ++index) {
                let property = optionalProperties[index];
                if (post.hasOwnProperty(property)) {
                    switch (property) {
                        case 'hashTags':
                        case 'likes':
                        case 'photoLinks': {
                            if (!Array.isArray(post[property])
                                && post[property].every(element => typeof element === 'string')) {
                                return false;
                            }
                            optionalFieldAmount++;
                            break;
                        }
                        default:
                            break;
                    }
                }
            }
            return requiredProperties.length + optionalFieldAmount === Object.keys(post).length;
        }

        static sort(collection) {
            collection._posts.sort(PostCollection._compareDates);
        }

        //all properties in filter config are optional and aren't empty
        static _validateFilterConfig(filterConfig) {
            let optionalFieldAmount = 0;

            for (let index = 0; index < allProperties.length; ++index) {
                let property = allProperties[index];
                if (filterConfig.hasOwnProperty(property)) {
                    switch (property) {
                        case 'hashTags':
                        case 'likes':
                        case 'photoLink': {
                            if (!Array.isArray(filterConfig[property])
                                && !filterConfig[property].every(function (element) {
                                    return typeof element === 'string';
                                })) {
                                return false;
                            }
                            optionalFieldAmount++;
                            break;
                        }
                        case 'id':
                        case 'description':
                        case 'author': {
                            if (typeof filterConfig[property] !== 'string') {
                                return false;
                            }
                            optionalFieldAmount++;
                            break;
                        }
                        case 'createdAt': {
                            if (!(filterConfig[property] instanceof  Date)) {
                                return false;
                            }
                            optionalFieldAmount++;
                            break;
                        }
                        default:
                            break;
                    }
                }
            }
            return optionalFieldAmount === Object.keys(filterConfig).length;
        }
    }

    class View {
        postView;
        currentUserName;
        collection;

        constructor(collection) {
            this.collection = collection;
            this.currentUserName = "UNaruto";
        }

        updateDocumentPostBox(collection) {
            this.postView = document.getElementsByClassName("post-box")[0];
        }

        displayAll() {
            this._clearOnlyHTML();
            for (let i = 0; i < this.collection.getPostsAmount(); ++i) {
                this.postView.appendChild(this.createPost(this.collection.getByIndex(i)));
            }
        }

        _clearOnlyHTML() {
            while (this.postView.lastElementChild !== null) {
                this.postView.removeChild(this.postView.lastChild);
            }
        }

        clear() {
            this._clearOnlyHTML();
            this.collection.clear();
        }

        changeUser(newUserName) {
            this._currentUserName = newUserName;
            let pUserName = document.createElement("p");
            let boldTag = document.createElement("b");
            boldTag.textContent = newUserName;
            pUserName.appendChild(boldTag);
            pUserName.appendChild(document.createElement("br"));

            let spanLogin = document.createElement("span");
            spanLogin.textContent = "@" + newUserName;
            pUserName.appendChild(spanLogin);
            let oldName = document.getElementById("user-name");
            let parentNode = oldName.parentNode;
            parentNode.replaceChild(pUserName, oldName);
            this.displayAll()
        }

        deletePost(postID) {
            let i;
            for (i = 0; i < collection.getPostsAmount(); ++i) {
                if (this.collection.getByIndex(i)["id"] === postID) {
                    break;
                }
            }

            if (i === this.collection.getPostsAmount()) {
                return false;
            }

            this.postView.removeChild(this.postView.getElementsByClassName("post")[i]);
            return true;

        }

        addPost(post) {
            if (!this.collection.add(post)) {
                return false;
            }
            PostCollection.sort(this.collection);
            return true;
        }

        editPost(postID, post) {
            let i;
            for (i = 0; i < this.collection.getPostsAmount(); ++i) {
                if (this.collection.getByIndex(i)["id"] === postID) {
                    break;
                }
            }
            if (i === this.collection.getPostsAmount()) {
                return false;
            }

            if (!this.collection.edit(postID, post)) {
                return false;
            }
            let newPost = this.createPost(this.collection.getByIndex(i));
            let oldPost = this.postView.getElementsByClassName("post")[i];
            this.postView.replaceChild(newPost, oldPost);
            return true;
        }


        createAuthorInfo(post) {
            let newInfo = document.createElement("div");

            let divUserPic = document.createElement("div");
            let userPic = document.createElement("img");
            userPic.setAttribute("src", "user-unaruto.png");
            userPic.setAttribute("alt", "user-pic");
            userPic.className = "user-pic";
            divUserPic.appendChild(userPic);

            let divUserName = document.createElement("div");
            let boldTag = document.createElement("b");
            boldTag.textContent = post["author"];
            divUserName.appendChild(boldTag);
            divUserName.appendChild(document.createElement("br"));

            let spanLogin = document.createElement("span");
            spanLogin.textContent = "@" + post["author"];
            divUserName.appendChild(spanLogin);

            let divDate = document.createElement("div");
            divDate.className = "half-opacity";

            divDate.textContent =
                post["createdAt"].getDay() +
                "." + post["createdAt"].getMonth() +
                "." + post["createdAt"].getFullYear() +
                " " + post["createdAt"].getHours() +
                ":" + post["createdAt"].getMinutes();

            let divControl = null;

            if (post["author"] === this._currentUserName) {
                divControl = document.createElement("div");
                divControl.className = "control-post-box";
                let edit = document.createElement("a");
                let deletePost = document.createElement("a");
                edit.setAttribute("href", "#");
                edit.textContent = "Edit Post";
                deletePost.setAttribute("href", "#");
                deletePost.textContent = "Delete Post";

                divControl.appendChild(edit);
                divControl.appendChild(document.createElement("br"));
                divControl.appendChild(deletePost);
            }

            newInfo.className = "author-info full-width";
            newInfo.appendChild(divUserPic);
            newInfo.appendChild(divUserName);
            newInfo.appendChild(divDate);
            if (divControl !== null) {
                newInfo.appendChild(divControl);
            }
            return newInfo;
        }

        createTextBox(post) {
            let divTextBox = document.createElement("div");
            divTextBox.className = "text-box full-width";
            let text = document.createElement("p");
            text.textContent = post.description;

            divTextBox.appendChild(text);

            for (let i = 0; i < post.photoLinks.length; ++i) {
                let img = document.createElement("img");
                img.className = "small-pic";
                img.setAttribute("src", post.photoLinks[i]);
                img.setAttribute("alt", "user-pic");
                divTextBox.appendChild(img);
            }

            if (post.hashTags.length !== 0) {
                let hashTags = document.createElement("p");
                hashTags.className = "hashtags";
                for (let i = 0; i < post.hashTags.length; ++i) {
                    let newtag = document.createElement("a");
                    newtag.setAttribute("href", "#");
                    newtag.textContent = "#" + post.hashTags[i] + " ";
                    hashTags.appendChild(newtag);
                }

                divTextBox.appendChild(hashTags);
            }
            return divTextBox;
        }

        createLikeField(post) {
            let divLikeField = document.createElement("div");
            divLikeField.className = "like-field";
            let spancontainer = document.createElement("span");
            let img = document.createElement("img");
            img.setAttribute("src", "heart.png");
            img.setAttribute("alt", "like");
            img.className = "like-icon";
            spancontainer.appendChild(img);
            spancontainer.appendChild(document.createTextNode(" " + post.likes.length.toString()));
            divLikeField.appendChild(spancontainer);
            return divLikeField;
        }

        createPost(post) {
            let newPost = document.createElement("div");
            newPost.className = "post";
            newPost.setAttribute("id", post["id"]);


            let authorInfo = this.createAuthorInfo(post);
            let textBox = this.createTextBox(post);

            let likeField = this.createLikeField(post);

            newPost.appendChild(authorInfo);
            newPost.appendChild(textBox);
            newPost.appendChild(likeField);
            return newPost;
        }

        displayFirst(postHTML) {
            this.postView.prepend(postHTML);
        }

    }

    let collection = new PostCollection(posts);
    let view = new View(new PostCollection([]));
    return {
        collection: collection,
        view: view,
        posts: posts
    }
})();