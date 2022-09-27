import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function LoadData() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => JSON.stringify(json))
            .then((o) => {

                const new_posts = [];

                const new_Arr = JSON.parse(o);
                for(const post of new_Arr){
                    new_posts.push(post);
                }
            })

    })

    return (
        <View>
            {/* <FlatList
        data={posts}
        renderItem={(post)=>(
            <Text>{post}</Text>
        )}
        keyExtractor={post => post.id}
      /> */}
      <Text>Hello</Text>
        </View>
    )
}