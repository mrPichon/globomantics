import React from 'react';
import Image from 'next/image'
import Grid from '@mui/material/Grid'

const subtileStyle = {
    fontSize: "x-large",
    color: "coral",
};


interface HText {
    headerText: string;
}

/*
const jsx = <div>text</div> // by const

(props)
    - {headerText} referrence by name
    - {children}

*/

const Banner = (props: HText) => {
    return (
        <header>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div>
                        <Image  className='logo'
                            src="/next.svg"
                            alt="Next.js Logo"
                            width={180}
                            height={37}
                            priority
                        />
                        <div>
                            <Image  className='logo'
                            src="/thirteen.svg"
                            alt="13"
                            width={40}
                            height={31}
                            priority
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div style={subtileStyle}>
                        {props.headerText}
                    </div>                    
                </Grid>
            </Grid>            
        </header>  
    );
};

export default Banner;