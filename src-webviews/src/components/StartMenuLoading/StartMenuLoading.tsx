import { useEffect, useState } from 'react';
import './StartMenuLoading.css';
import logo from '../../assets/logo.png'
import { WebViewEvents } from '../../../../src/core/shared/webviewEvents.ts';

function StartMenuLoading()
{
    const [isVisible, setVisibility] = useState(false);

    useEffect(() => {
      if (!alt) {
        return;
      }
      
      alt.on(WebViewEvents.startWebViews, (shouldBeVisible: boolean) => {
        setVisibility(shouldBeVisible);
      });

      setTimeout(() => {
        setVisibility(false);
        alt.emit(WebViewEvents.cursorWebView);
      }, 5000);

    }, []);

    return(
      <div className={isVisible ? '' : 'hide'}>
        <div className='MainContainer'>
          <div className='Container'>
            <div className='LogoContainer'>
              <img src={logo}/>
            </div>
            <h1>RolePlay сервер нового уровня.</h1>
            <h1>Infinity RP не связан с Rockstar Games и Take-Two.</h1>
          </div>
        </div>
      </div>
      
    );
}

export default StartMenuLoading