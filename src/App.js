import logo from './logo.svg';
import bjp from './bjp.jpg'
import aap from './aap.jpg'
import cong from './congress.png'
import beep from './beep.mp3'
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  // state with var and callback functions
  const [bjpCounter, SetBjpCounter] = useState(0);
  const [aapCounter, SetAapCounter] = useState(0);
  const [congressCounter, SetCongressCounter] = useState(0);
  const [otherCounter, SetOtherCounter] = useState(0);
  const [reamingVoter, setReamingVoter] = useState(10)
  const [vvpatImg, setVvpatImg] = useState('');
  const [hideClick, sethideClick] = useState('');
  const [displayResult, setDisplayResult] = useState(false);

  const TotalVote = 10;
  useEffect(() => {
    let submitedvote = bjpCounter + aapCounter + congressCounter + otherCounter;
    setReamingVoter(TotalVote - submitedvote)
  }, [bjpCounter, aapCounter, congressCounter])

  const pressBtn = (party) => {
    let submitedvote = bjpCounter + aapCounter + congressCounter + otherCounter;
    if (submitedvote == TotalVote) {
      alert('Voteing Complete');
      return false;
    }

    if (vvpatImg == '' && hideClick == '') {
      var audio = document.getElementById("myAudio");
      audio.play();
      if (party == 'bjp') {
        SetBjpCounter(bjpCounter + 1)
        VvpatUpdate(bjp)
        sethideClick(bjp)
        
      }
      if (party == 'aap') {
        SetAapCounter(aapCounter + 1)
        VvpatUpdate(aap)
        sethideClick(aap)
        
      }
      if (party == 'congress') {
        SetCongressCounter(congressCounter + 1)
        VvpatUpdate(cong)
        sethideClick(cong)
        
      }
      if (party == 'other') {
        SetOtherCounter(otherCounter + 1)
        VvpatUpdate(cong)
        sethideClick(cong)
        
      }
    }

  }
  const VvpatUpdate = (imgsrc) => {
    setTimeout(() => {
      setVvpatImg(imgsrc)
    }, 2000)
    setTimeout(() => {
      setVvpatImg('')
      sethideClick('')
    }, 6000)
  }
  return (
    <>
    
      <div className='main-conatiner'>
        <div className='left-container'>
          <div className='total-voter'><h4>Total Voter: {TotalVote}</h4>
            <h4>Reaming Voter: {reamingVoter}</h4>
          </div>
          <div className="party-list">
            <div className="bjp party-conatiner">
              <img src={bjp} />
              <button className='party-name' onClick={() => pressBtn('bjp')}>BJP</button>
              {/* <div className="counter">{bjpCounter}</div> */}
            </div>
            <div className="app party-conatiner">
              <img src={aap} />
              <button className='party-name' onClick={() => pressBtn('aap')}>AAP</button>
              {/* <div className="counter">{aapCounter}</div> */}
            </div>
            <div className="congress party-conatiner">
              <img src={cong} />
              <button className='party-name' onClick={() => pressBtn('congress')}>CONGRESS</button>
              {/* <div className="counter">{congressCounter}</div> */}
            </div>
            <div className="other party-conatiner">
              <img src={cong} />
              <button className='party-name' onClick={() => pressBtn('other')}>other</button>
              {/* <div className="counter">{congressCounter}</div> */}
            </div>
          </div>

          <button className='party-name display-result' onClick={() => setDisplayResult(true)} >Display Result</button>
        </div>
        <div className='right-container'>
          <div className='vvpat-container'>
            <h4>VVPAT DISPLAY</h4>
            <div className='vvpat-img'>
              {vvpatImg != "" &&
                <img src={vvpatImg} />
              }
            </div>
          </div>
        </div>
      </div>
      {displayResult &&
        <table>
          <tr>
            <th>Party Name</th>
            <th>Total Vote</th>
          </tr>
          <tbody>
            <tr>
              <td>BJP</td>
              <td>{bjpCounter}</td>
            </tr>
            <tr>
              <td>AAP</td>
              <td>{aapCounter}</td>
            </tr>
            <tr>
              <td>CONGRESS</td>
              <td>{congressCounter}</td>
            </tr>
            <tr>
              <td>Other</td>
              <td>{otherCounter}</td>
            </tr>
          </tbody>
        </table>
      }
      <audio id="myAudio" controls style={{display:'none'}}>
        <source src={beep} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}

export default App;
