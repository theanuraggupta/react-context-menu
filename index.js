import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { useEffect } from 'react';
import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
import { Browser } from '@syncfusion/ej2-base';


const Default = () => {
    let animationSettings = {
        effect: Browser.isDevice ? 'ZoomIn' : 'SlideDown'
    };
    let content = Browser.isDevice ? 'Touch hold to open the ContextMenu' : 'Right click/Touch hold to open the ContextMenu';
    //ContextMenu items definition
    let menuItems = [
        {
            text: 'Cut',
            iconCss: 'e-cm-icons e-cut'
        },
        {
            text: 'Copy',
            iconCss: 'e-cm-icons e-cm-copy'
        },
        {
            text: 'Paste',
            iconCss: 'e-cm-icons e-paste',
            items: [
                {
                    text: 'Paste Text',
                    iconCss: 'e-cm-icons e-pastetext'
                },
                {
                    text: 'Paste Special',
                    iconCss: 'e-cm-icons e-pastespecial'
                }
            ]
        },
        {
            separator: true
        },
        {
            text: 'Link',
            iconCss: 'e-cm-icons e-link'
        },
        {
            text: 'New Comment',
            iconCss: 'e-cm-icons e-comment'
        }
    ];
    // Event triggers while rendering each menu item where “Link” menu item is disabled
    const addDisabled = (args) => {
        if (args.item.text === 'Link') {
            args.element.classList.add('e-disabled');
        }
    };
    return (<div className='control-pane'>
            <div className='control-section'>
                <div className='contextmenu-section'>
                    <div id='contextmenu-control'>
                        <div id="contextmenutarget">{content}</div>
                        <ContextMenuComponent target='#contextmenutarget' items={menuItems} animationSettings={animationSettings} beforeItemRender={addDisabled}/>
                    </div>
                </div>
            </div>
        </div>);
};
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);