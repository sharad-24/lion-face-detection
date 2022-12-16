import { Button, Grid } from '@mui/material'
import React,{useState, useEffect} from "react";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

import './upload.css';

import logo from './img/logo.jpg';
import listimg from './img/list.jpg';

export default function Upload() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    const imagesListRef = ref(storage, "images/");
    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url]);
            });
        });
    };

    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        });
    }, []);

    return (
        <div style={{ backgroundColor: '#F5F5F5' }}>
            <Grid container className='px-5 py-10'>
                <Grid xs={12} md={6} lg={6}>
                    <img src={logo} alt="dfjhldf" />
                </Grid>
                <Grid xs={12} md={6} lg={6}>
                    <h1 className='text-4xl'>LION FACE DETECTION MODEL</h1>
                </Grid>
            </Grid>
            <Grid container className='px-5 py-10'>
                <Grid xs={12} md={4} lg={4}>
                    <img src={listimg} alt="dfjhldf" />
                </Grid>
                <Grid xs={12} md={8} lg={8}>
                    <div className='backgroundImage'>
                        <div style={{paddingTop: '40vh'}}>
                            <input
                                type="file"
                                onChange={(event) => {
                                    setImageUpload(event.target.files[0]);
                                }}
                            />
                            <Button variant="contained" onClick={uploadFile}> Upload Image</Button>
                            {/* {imageUrls.map((url) => {
                                return <img src={url} />;
                            })} */}
                        </div>

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
