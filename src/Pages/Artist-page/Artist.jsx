import React from 'react'
import { Link } from 'react-router-dom'
import "./Artist.css"
import {connect} from 'react-redux'
import { ListGroup } from 'react-bootstrap'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'


const mapStateToProps = state =>state
const mapDispatchToProps = dispatch=>({
    addLike:(body)=>
    dispatch({
      type:"ADD_LIKE",
      payload:body,
      
    }
    ),
    removeLike:(body)=>
    dispatch({
      type:"REMOVE_LIKE",
      payload:body,
      
    }
    ),
    getDataWithThunk:(url)=>
    dispatch(async(dispatch,getState)=>{
        try {
            const res = await fetch(url, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "c608fc777fmshd55587c64c83d78p1ebebcjsn20918a48db47",
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
                }
            })
            const data = await res.json()
            console.log('current state: ', getState())
            if(res.ok){
                dispatch({
                    type:"GET_ARTIST_DATA",
                    payload:data.data,
                })
            }else{
                dispatch({
                    type:"SET_ERROR",
                    payload:true,
                })
            }
        } catch (error) {
            console.log(error)
        }
    })
})

class Artist extends React.Component{
    state={
        albums:[],
        songs:[],
        fav:[]
    }
   
    componentDidMount =async ()=>{

      try{
      let url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem"
      let response = await this.props.getDataWithThunk(url)
      console.log(response)
      }
        
        catch (error) {
            console.log(error);
          }
    }
    // componentDidUpdate = (prevProps)=>{
    //     if(prevProps.like.len !== this.props.like.length)
    // }
    render(){
        // console.log(this.props.songs.artists)
        // let fav = []
        // if(this.props.mylikes.like){
        //      fav = this.props.mylikes.like.find(
        //         (artist) => parseInt(artist.id) === parseInt(this.props.songs.artists.map((myId)=>myId.id))
        //       );
        //       console.log(fav)
        // }
        //    let enith = this.props.mylikes.like.find(
        //     (artist) => parseInt(artist.id)  === 1109731  );
        // console.log(enith)
      
      
        return(
            <>
          {this.props.songs.artists ? (
              <>
            <div className="main-artist">

            <div className="shade" >
            {/* <img src="https://e-cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/1000x1000-000000-80-0-0.jpg" alt="" width="100%" className="img-cover" />   */}
            <img src= {this.props.songs.artists.picture_xl} alt ="album" className="img-cover" />
                
            <div className="shadeBg">  </div>
            </div>
            <div className="centered">
            <div>
            <p>33,000,575 MONTHLY LISTENERS</p>  
            <h1><b> Queen</b></h1>
            <input className="btn btn-success"type="button" value="Play"/>
            <input className="btn btn-primary-outline"type="button"  value="Follow"/>
            <div className="mt-5">
            <Link to="#" className="mr-3 border1"  >OVERVIEW</Link>
            <Link to="#" className="mr-3"  >RELATED ARTIST</Link>
            <Link to="#" className="mr-3" >ABOUT</Link>
            </div>
            </div>
            </div>
            
            </div>
            <div className="aside">
            <ListGroup variant="flush" >
                {this.props.songs.artists ?(

                this.props.songs.artists.slice(0,8).map((song,i)=>{
                    return <ListGroup.Item className="list-color " key={i}>
                       <img src={`https://e-cdns-images.dzcdn.net/images/cover/${song.md5_image}/56x56-000000-80-0-0.jpg`} alt="img" /> <span className="ml-2">{i+1}</span ><span className="ml-3 " >  {!this.props.mylikes.like.find((myli)=>parseInt(myli.id)===parseInt(song.id)) ? (
                <i
                  className="far fa-heart fa-2x mr-2  text-warning"
                  onClick={() => this.props.addLike(song)}
                ></i>
              ) : (
                <i
                  className="fas fa-heart fa-2x mr-2 text-warning"
                  onClick={() => this.props.removeLike(song)}
                ></i>
              )}</span> <span className="ml-18">{song.title}</span> 
                    </ListGroup.Item>

                
                })
                )
                
                
                :(<h3>Enith</h3>)}
                </ListGroup>
            </div>
            </>
          )
          
          
          
         :(
            <h4>Enith</h4>
        )}
      
     </>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Artist)