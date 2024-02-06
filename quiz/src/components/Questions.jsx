import React from 'react'
import questions from '../questions'
import './Questions.css'

function Questions() {

  return (
    <div>
        <div>
            {/* first page */}
            <div className="firstpage" >
                <h2>Quiz App</h2>
                <button className='play' >Play</button>
            </div>
            {/* quesstion box */}
            <div className="main" >
                <h1>Question</h1>
                <h4 className='questionCount'>1 of 5</h4>
                <h2>{questions[0].text}</h2>
                <div className="options">
                    <button className='btn'  id='0'>{questions[0].options[0].text}</button>
                    <button className='btn'  id='1'>{questions[0].options[1].text}</button>
                    <button className='btn'  id='2'>{questions[0].options[2].text}</button>
                    <button className='btn'  id='3'>{questions[0].options[3].text}</button>
                </div>
                <div className="btns">
                    <button style={{backgroundColor: '#3E7EAA', color: 'black'}} >Previous</button>
                    <button style={{backgroundColor: '#008001', color: 'black'}} >Next</button>
                    <button style={{backgroundColor: 'red', color: 'black'}}>Quit</button>
                </div>
            </div>
            {/* reuslt box */}
            <div className="result" >
                <h2>Result</h2>
                <div className="scoreCard">
                    <div className="top">
                        <h4>x</h4>
                        <h2>y</h2>
                    </div>
                    <div className='bottom'>
                        <div className="bottom1">
                            <p>Total number of questions</p>
                            <p>Number of attempted questions</p>
                            <p>Number of correct answers</p>
                            <p>Number of wrong answers</p>
                        </div>
                        <div className="bottom2">
                            <p>5</p>
                            <p>3</p>
                            <p>1</p>
                            <p>2</p>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button className="playAgain" >Play Again</button>
                    <button className="backToHome">Back To Home</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Questions;
