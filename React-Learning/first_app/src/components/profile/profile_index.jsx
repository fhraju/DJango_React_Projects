import React from 'react'
import './profile.style.css'

import Bio from './bio'
import Skills from './skills'
import Links from './links'

class Profile extends React.Component {
     me = {
        'name': 'Fardus Hasan Raju',
        'title': 'FullStack Developer',
        'skillA': 'Python',
        'skillB': 'JavaScript',
        'skillC': 'React',
        'socialLink1': 'Linkedin',
        'socialLink2': 'Twitter',
        'socialLink3': 'Github',
        
    };

    render(){     
        return (
            <div className='Container'>
                <Bio name={ this.me.name } title={ this.me.title } />
                <Skills skillA={this.me.skillA} skillB={this.me.skillB} skillC={this.me.skillC} />
                <Links socialLink1={this.me.socialLink1} socialLink2={this.me.socialLink2} socialLink3={this.me.socialLink3}/>
            </div>
        )
    }
}

export default Profile;