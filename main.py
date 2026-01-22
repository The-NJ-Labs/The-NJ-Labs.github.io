import streamlit as st

st.set_page_config(page_title="The NJ Labs", page_icon="💻")

st.sidebar.title("Navigation")

# Using a single markdown block with custom CSS for tighter spacing
st.markdown("""
    <style>
        .header-container {
            margin-bottom: 40px;
            text-align: center;
        }
        .header-container h1 {
            margin-bottom: 0px;
            padding-bottom: 5px;
        }
        .header-container p {
            margin-top: -10px;
            margin-bottom: 5px;
            color: #808495;
            font-size: 1.1rem;
        }
    </style>
    <div class="header-container">
        <h1>The NJ Labs</h1>
        <p>The Open-source Organization for Developers by Developers</p>
        <p style="font-size: 0.9rem;">Made by 'Mahir29Flame' A.K.A 'NJ'</p>
    </div>
    <iframe src="Index.html" width="100%" height="600px"></iframe>
    """, unsafe_allow_html=True)

# Example of a break line
st.divider()