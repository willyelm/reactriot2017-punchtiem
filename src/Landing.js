import React from 'react';
import { Button, Carousel, Timeline } from 'antd';
import { login } from './helpers/auth';

const wrapperStyle = {
  margin: '2em',
  textAlign: 'center'
};

const imageStyle = {
  width: '100%',
  height: '30vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5em'
};

const Landing = ({ auth, history, onLogin }) => {
  return <div>
      <h1 className="structural">Monument Run</h1>
      <Carousel autoplay>
        <div style={{ ...imageStyle, backgroundImage: `url(https://images.unsplash.com/36/xIsiRLngSRWN02yA2BbK_submission-photo-7.jpg?dpr=1&auto=format&fit=crop&w=${window.innerWidth}&q=80&cs=tinysrgb&crop=&bg=)` }}>
          <h3>Explore</h3>
        </div>
        <div style={{ ...imageStyle, backgroundImage: `url(https://images.unsplash.com/photo-1482401204742-eb3c31c24722?dpr=1&auto=compress,format&fit=crop&w=${window.innerWidth}&q=80&cs=tinysrgb&crop=&bg=)` }}>
          <h3>Challenge</h3>
        </div>
        <div style={{ ...imageStyle, backgroundImage: `url(https://images.unsplash.com/photo-1487956382158-bb926046304a?dpr=1&auto=compress,format&fit=crop&w=${window.innerWidth}&q=80&cs=tinysrgb&crop=&bg=)` }}>
          <h3>Exercise</h3>
        </div>
      </Carousel>
      <div style={wrapperStyle}>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2em 0' }}>
          <Timeline style={{ textAlign: 'left' }}>
            <Timeline.Item>Log in using your Google account</Timeline.Item>
            <Timeline.Item>Start your run</Timeline.Item>
            <Timeline.Item>
              Visit as many monuments as possible within the time limit
            </Timeline.Item>
            <Timeline.Item>
              Take pictures of the monuments you've visited
            </Timeline.Item>
            <Timeline.Item>
              Challenge everyone to beat your time!
            </Timeline.Item>
          </Timeline>
        </div>
        {!auth ? <Button type="primary" onClick={e => {
                login()
                  .then(result => {
                    const { credential: { accessToken }, user } = result;
                    onLogin(accessToken, user);
                  })
                  .catch(error => {
                    this.setState({
                      loginError: 'Authentication with Google failed 😢'
                    });
                  });
              }}>
              Login with Google
            </Button> : <Button type="primary" onClick={() => history.push('/app')}>
              Start your Monument Run
            </Button>}
      </div>
    </div>;
};

export default Landing;
