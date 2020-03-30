const Boost = (function() {
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

    const requiredProperties = [
        'id',
        'description',
        'createdAt',
        'author'
    ];

    const optionalProperties = [
        'likes',
        'photoLink',
        'hashTags'
    ];

    const allProperties = [
        'likes',
        'photoLink',
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

        getPosts(skip = 0, top = 10, filterConfig) {
            posts.sort(PostCollection._compareDates);
            PostCollection._validateFilterConfig(filterConfig);
            return posts.filter(isValid, filterConfig);
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
                        case 'photoLink': {
                            if (!Array.isArray(post[property])
                                && !post[property].every(function (element, index, array) {
                                    return typeof element === 'string';
                                })) {
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
                                && !filterConfig[property].every(function (element, index, array) {
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
    
    function isValid(element, index, array) {
        for (let property in this) {
            if (this.hasOwnProperty(property)) {
                if (property === 'hashTags' || property === 'likes') {
                    //hashtag or nickname of person, who liked post
                    for (let filterElem in this[property]) {
                        if (!element[property].find(arrayElem => arrayElem === filterElem)) {
                            return false;
                        }
                    }
                } else {
                    if (!element.hasOwnProperty(property) || element[property] !== this[property]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    function getPost(id) {
        if (id && typeof id === 'string') {
            return posts.find(item => item.id === id);
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

    function validateProperties(post) {
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
                    case 'photoLink': {
                        if (!Array.isArray(post[property])
                            && !post[property].every(function (element, index, array) {
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

    function editPost(id, post) {
        if (!validateProperties(post)) {
            return false;
        }
        for (let i = 0; i < posts.length; ++i) {
            if (posts[i].id === id) {
                let tmpKeys = Object.keys(post);
                for (let index = 0; index < tmpKeys.length; ++index) {
                    let key =  tmpKeys[index];
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

        let removePostIndex = posts.findIndex(item => item.id === id);
        if (removePostIndex === -1) {
            return false;
        }
        posts.splice(removePostIndex, 1);
        return true;
    }

    return {
        getPosts: getPosts,
        getPost: getPost,
        addPost: addPost,
        editPost: editPost,
        removePost: removePost
    }

})();


