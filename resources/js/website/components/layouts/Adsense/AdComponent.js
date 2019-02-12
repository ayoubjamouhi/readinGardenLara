import React from 'react';

class AdComponent extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  render () {
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-3080286913683536'
          data-ad-slot='2002740794'
          data-ad-format='auto'
          data-full-width-responsive="true" />
    );
  }
}
export default AdComponent;