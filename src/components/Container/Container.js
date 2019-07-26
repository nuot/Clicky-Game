import React,{Component } from 'react';
import img1 from '../Images/aurora1.jpg'
import img2 from '../Images/aurora2.jpg'
import img3 from '../Images/aurora3.jpg'
import img4 from '../Images/aurora4.jpg'
import img5 from '../Images/aurora5.jpg'

class Container extends Component {
    state ={
        clicked: [],
        note: 'click on one picture, but do not click twice!',
        count: 0,
        highest:0,
        //give each image an num id 
        images: [
            { id:1, src: img1},
            { id:2, src: img2},
            { id:3, src: img3},
            { id:4, src: img4},
            { id:5, src: img5},
        ],
    }

    handleClickOn = id => {
       
        console.log(id)
        let clickedArray = this.state.clicked
        console.log(clickedArray)
        clickedArray.push(id)
        if (id in clickedArray){
            console.log('false')
            this.setState({
                note: 'You failed, try again!',
                count: 0
            })
        }
        else{
            this.setState({
                note:'Keep Going!',
                count: this.state.count+1,
                highest: this.state.count+1
            })
            }
        }
    
    
    render(){
        return (
            <div>
            <h2>{this.state.note}</h2>
            <h2>Your Score: {this.state.count}</h2>
            <h2>Highest Score: {this.state.highest}</h2>
            {this.state.images.map(({id, src}) =>
                <img className='aurorapics' key={id} src={src} onClick={this.handleClickOn.bind(this,id)} style={{width: 230, height:180, margin: 20}}/>
            )}
            </div>
        )
    }

}

export default Container