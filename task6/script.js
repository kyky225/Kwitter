;(function() {
    let Boost = {};
    let posts = [
        {
            id: '1',
            description: 'super desc 1',
            createdAt: new Date('2000-03-17T12:12:12'),
            author: 'Agent 1',
            photoLink: 'https://en.wikipedia.org/wiki/Joseph_Stalin#/media/File:Stalin_Full_Image.jpg',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '2',
            description: 'super desc 2',
            createdAt: new Date('2001-03-17T12:12:12'),
            author: 'Agent 2',
            photoLink: '',
            likes: ['Peter', 'Arnold'],
            hashTags: ['USA']
        },
        {
            id: '3',
            description: 'super desc 1',
            createdAt: new Date('2003-03-17T12:12:12'),
            author: 'Agent 3',
            photoLink: '',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '4',
            description: 'super desc 1',
            createdAt: new Date('2004-03-17T12:12:12'),
            author: 'Agent 4',
            photoLink: '',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '5',
            description: 'super desc 5',
            createdAt: new Date('2005-03-17T12:12:12'),
            author: 'Agent 5',
            photoLink: '',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '6',
            description: 'super desc 6',
            createdAt: new Date('2006-03-17T12:12:12'),
            author: 'Agent 6',
            photoLink: '',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '7',
            description: 'super desc 7',
            createdAt: new Date('2007-03-17T12:12:12'),
            author: 'Agent 7',
            photoLink: '',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '8',
            description: 'super desc 8',
            createdAt: new Date('2008-03-17T12:12:12'),
            author: 'Agent 8',
            photoLink: '',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '9',
            description: 'super desc 9',
            createdAt: new Date('2009-03-17T12:12:12'),
            author: 'Agent 9',
            photoLink: '',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '10',
            description: 'super desc 10',
            createdAt: new Date('2010-03-17T12:12:12'),
            author: 'Agent 10',
            photoLink: '',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '11',
            description: 'super desc 11',
            createdAt: new Date('2011-03-17T12:12:12'),
            author: 'Agent 11',
            photoLink: '',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '12',
            description: 'super desc 12',
            createdAt: new Date('2012-03-17T12:12:12'),
            author: 'Agent 12',
            photoLink: '',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '13',
            description: 'super desc 13',
            createdAt: new Date('2013-03-17T12:12:12'),
            author: 'Agent 13',
            photoLink: '',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '14',
            description: 'super desc 14',
            createdAt: new Date('2014-03-17T12:12:12'),
            author: 'Agent 14',
            photoLink: '',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '15',
            description: 'super desc 15',
            createdAt: new Date('2015-03-17T12:12:12'),
            author: 'Agent 15',
            photoLink: '',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '16',
            description: 'super desc 16',
            createdAt: new Date('2016-03-17T12:12:12'),
            author: 'Agent 16',
            photoLink: '',
            likes: ['Peter', 'Arnold', 'Stalin'],
            hashTags: ['USSR', 'Stalin']
        },
        {
            id: '17',
            description: 'super desc 17',
            createdAt: new Date('2017-03-17T12:12:12'),
            author: 'Agent 17',
            photoLink: '',
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
        },
    ];

    const postProperties = [
        'id',
        'description',
        'createdAt',
        'author',
        'photoLink',
        'likes',
        'hashTags'
    ];

    function validatePost(post) {
        let optionalFieldAmount = 0;
        if (!post.hasOwnProperty('id') || typeof post.id !== 'string') {
            return false;
        }

        if (!post.hasOwnProperty('description') || typeof post.description !== 'string'
            || post.description.length >= 200) {
            return false;
        }

        if (!post.hasOwnProperty('createdAt') || !(post.createdAt instanceof Date)) {
            return false;
        }

        if (!post.hasOwnProperty('author') || typeof post.author !== 'string') {
            return false;
        }

        if (!post.hasOwnProperty('photoLink') || typeof post.photoLink !== 'string') {
            optionalFieldAmount--;
        }

        if (!post.hasOwnProperty('likes') || !Array.isArray(post.likes)) {
            return false;
        }
        else {
            if (!post.likes.every(function(element, index, array) {
                return typeof element === 'string';
            })) {
                optionalFieldAmount++;
            }
        }

        if (!post.hasOwnProperty('hastTags') || !Array.isArray(post.hashTags)) {
            optionalFieldAmount--;
        }
        else {
            if (!post.hastTags.every(function(element, index, array) {
                return typeof element === 'string';
            })) {
                optionalFieldAmount++;
             }
        }

        return post.keys().length === postProperties.length - optionalFieldAmount;
    }

    function compareDates(a, b) {
        return b.createdAt - a.createdAt;
    }


    function validateFilerConfig(filterConfig) {

    }

    function isValid(post, filterConfig) {
        if (filterConfig.author !== '' && filterConfig.author !== post.author) {
            return false;
        }

        return !(filterConfig.createdAt instanceof Date && compareDates(post.createdAt, filterConfig.createdAt) > 0);
    }

    function getPosts(skip = 0, top = 10, filterConfig) {
        posts.sort(compareDates);
        let newList = [];
        validateFilerConfig(filterConfig);
        for (let i = skip; i < posts.length && i < skip + top; ++i) {
            if (isValid(posts[i], filterConfig)) {
                newList.push(posts[i]);
            }
        }
        return newList;
    }

    function getPost(id) {
        if (id && typeof id === 'string') {
            for (let postObject in posts) {
                if (postObject['id'] === id) {
                    return postObject;
                }
            }
        }
        return undefined;
    }

    function addPost(post) {
        if (!validatePost(post)) {
            return false;
        }
        posts.push(post);
        return true;
    }


    //check post only for editPost
    function validateProperties() {
        //latter
        return true;
    }

    function editPost(id, post) {
        validateProperties(post);
        for (let i = 0; i < posts.length; ++i) {
            if (posts[i].id === id) {
                let tmpKeys = post.keys();
                for (let key in tmpKeys) {
                    posts[i][key] = post[key];
                }
                return true;
            }
        }
        return false;
    }

    function removePost(id) {
        if (typeof id !== 'string') {
            return false;
        }

        for (let i = 0; i < posts.length; ++i) {
            if (posts[i].id === id) {
                posts.splice(i, 1);
                return true;
            }
        }
    }

    Boost.getPosts = getPosts;
    Boost.posts = posts;
    Boost.getPost = getPost;
    Boost.validatePost = validatePost;
    Boost.addPost = addPost;
    Boost.editPost = editPost;
    Boost.removePost = removePost;
    window.MyLib = Boost;

}());


