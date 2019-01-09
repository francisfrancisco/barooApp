import React, {Component} from 'react';
import {Post} from './';
import {FlatList, View, Text} from 'react-native';

class PostFeed extends Component{


    _renderPost(){
        return <Post />
    }

    _returnKey(item){
        return item.toString()
    }

    render(){
            return(
                    <FlatList
                    data={[1,2,3,4,5,6,7,8,9,10]}
                    keyExtractor={this._returnKey}
                    renderItem={this._renderPost}
                    />
            )
    }
}

export default PostFeed

//NOT GETTING IMAGE FROM FIREBASE
// import React, {Component} from 'react';
// import {Post} from './';
// import {FlatList, View, Text, LayoutAnimation, RefreshControl} from 'react-native';
// import firebase from 'firebase'
// import Fire from '../Fire'

// // const PAGE_SIZE = 10;

// class PostFeed extends Component{
//     state = {
//     loading: false,
//     posts: [],
//     data: {},
//     };

//     componentDidMount() {
//     // Check if we are signed in...
//         if (Fire.shared.uid) {
//             this.makeRemoteRequest();
//         } else {
//             firebase.auth().onAuthStateChanged(user => {
//             if (user) {
//                 this.makeRemoteRequest();
//             }
//             });
//         }
//     }

//     // Append the item to our states `data` prop
//     addPosts = posts => {
//         this.setState(previousState => {
//             let data = {
//             ...previousState.data,
//             ...posts,
//             };
//             return {
//             data,
//             // Sort the data by timestamp
//             posts: Object.values(data).sort((a, b) => a.timestamp < b.timestamp),
//             };
//         });
//     };

//     // Call our database and ask for a subset of the user posts
//     makeRemoteRequest = async lastKey => {
//         // If we are currently getting posts, then bail out..
//         if (this.state.loading) {
//             return;
//         }
//     this.setState({ loading: true });

//     // The data prop will be an array of posts, the cursor will be used for pagination.
//     const { data, cursor } = await Fire.shared.getPaged({
//         size: PAGE_SIZE,
//         start: lastKey,
//     });

//     this.lastKnownKey = cursor;
//     // Iteratively add posts
//     let posts = {};
//     for (let child of data) {
//         posts[child.key] = child;
//     }
//     this.addPosts(posts);

//     // Finish loading, this will stop the refreshing animation.
//     this.setState({ loading: false });
//     };

//     // Because we want to get the most recent items, don't pass the cursor back.
//     // This will make the data base pull the most recent items.
//     _onRefresh = () => this.makeRemoteRequest();

//     // If we press the "Load More..." footer then get the next page of posts
//     onPressFooter = () => this.makeRemoteRequest(this.lastKnownKey);

//     render(){
//         LayoutAnimation.easeInEaseOut();
//             return(
//                 <Post
//                     refreshControl={
//                     <RefreshControl
//                         refreshing={this.state.loading}
//                         onRefresh={this._onRefresh}
//                     />
//                     }
//                     onPressFooter={this.onPressFooter}
//                     data={this.state.posts}
//                 />
//             )
//     }
// }

// export default PostFeed
