import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const requestUrl = 'https://newsapi.org/v2/everything?q=Apple&from=2022-09-01&sortBy=popularity&apiKey=65ea56335df1402aab907f176cb0777f';


export const fetchNews = createAsyncThunk(
    'news/fetchNews', 
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch(requestUrl);

            if(!response.ok) {
                throw new Error('Server Error!')
            }

            const data = response.json();

            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
        
    }
)


const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [],
        status: null,
        error: null
    }, 
    reducers: {
        
    },
    extraReducers: {
        [fetchNews.pending]: (state) => {
            state.status = 'loading';
            state.error = null
        },
        [fetchNews.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.news = action.payload.articles.filter((item, index) => {
                if(index > 0 && index < 19) {
                    return item
                }
            })
        },
        [fetchNews.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        }
    }
})

export default newsSlice.reducer