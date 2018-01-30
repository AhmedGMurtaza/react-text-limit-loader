import React, { Component } from 'react';

class TextLimitLoader extends Component {
  state = {
    lettersCount: 0,
    inputValue: '',
    countLimit: this.props.limit,
    loaderCompleted: 0
  }

  handleType = (e) => {
    const val = e.target.value;
    if (val.length <= this.state.countLimit) {
      this.setState((prev) => {
        return {
          lettersCount: val.length,
          inputValue: val,
          loaderCompleted: Math.floor(val.length / prev.countLimit * 100, 2)
        }
      })
    }
    else {
      this.setState(prev => {
        return { inputValue: prev.inputValue }
      })
    }
  }

  render() {
    const { inputValue, lettersCount, loaderCompleted, countLimit } = this.state;
    const { loaderColor } = this.props;
    const loaderStyles = {
      display: (lettersCount === 0) ? 'none' : 'block',
      borderColor: loaderColor,
      boxShadow: `0 0 7px ${loaderColor}`,
      width: `${loaderCompleted}%`
    }
    return (
      <div className={`loader-wrapper animated ${lettersCount == countLimit ? 'shake' : ''}`}>
        <div className="input-wrapper">
          <textarea onChange={this.handleType} value={inputValue} placeholder="write some thing here.."></textarea>
          <span className="loader" style={loaderStyles}></span>
        </div>
        <div className="">
          <span className="count">{lettersCount}/{countLimit}</span>
        </div>
      </div>
    )
  }
}

TextLimitLoader.propTypes = {
  // loaderColor: React.PropTypes.string,
  // limit: React.PropTypes.string
}

export default TextLimitLoader;