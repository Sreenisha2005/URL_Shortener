import axios from 'axios';
import { useState } from 'react';
import './index.css';

function UrlShortener(){
    const[longUrl, setLongUrl] = useState('');
    const[shortUrl, setShortUrl] = useState('');
    const[error, setError] = useState('');
    const[loading, setLoading] = useState(false);

    const handleShorten = async () => {
        if(!longUrl.trim()){
            setError('Please enter a valid URL');
            return;
        }

        setLoading(true);
        setError('');
        setShortUrl('');

        try{
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/url`, { longurl: longUrl });
            setShortUrl(`${import.meta.env.VITE_API_URL}/` + response.data.shortcode);
        }
        catch(err){
            setError('Failed to shorten URL. Please try again.');
        }
        finally{
            setLoading(false);
        }
    }
    

    return(
        <div className='container'>
            <h2>URL Shortener</h2>
            <input
            type="text"
            placeholder='Enter the URL'
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            />
            <button onClick={handleShorten}>
                {loading ? "Shortening..." : "Shorten URL"}
            </button>
            { error && <p className='error_line'>{error}</p>}
            { shortUrl && (
                <p className='success_line'>
                    Shortened URL: 
                    <a href = {shortUrl} target='_blank' rel='noopener noreferrer' >
                        {shortUrl}
                    </a>
                </p>
            )}
            
        </div>
        
    );
}

export default UrlShortener;