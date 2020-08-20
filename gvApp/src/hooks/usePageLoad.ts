import { useState, useEffect } from "react";
import { useCamera } from '@ionic/react-hooks/camera';
import { useFilesystem, base64FromPath } from '@ionic/react-hooks/filesystem';
import { useStorage } from '@ionic/react-hooks/storage';
import { isPlatform } from '@ionic/react';
import { Capacitor, FilesystemDirectory } from "@capacitor/core";

/*
public getFeed() { 
    return new Promise((resolve, reject) => {
        this._http.get("assets/gvArticleFeed.json")
            .map((response: Response) => {
                console.log(response);
                resolve(response.json());
        });
    });
}
*/