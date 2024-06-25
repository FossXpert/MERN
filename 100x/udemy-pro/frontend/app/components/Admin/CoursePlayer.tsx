import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
type Props = {
  videoUrl: string;
  title: string;
}

const CoursePlayer: FC<Props> = ({ videoUrl, title }) => {

  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: "",
  })

  useEffect(() => {
    axios.post(`http://35.226.62.251:3004/api/course/getvdocipherotp`, {
      videoId: videoUrl,
    }).then((res) => {
      setVideoData(res.data)
    })
  }, [videoUrl])



  return (
    <div style={{ paddingTop: "41%", position: "relative" }}>
      {
        videoData.otp && videoData.playbackInfo !== "" && (
          <iframe
            src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=pXwqP0OZW2Z8ahiB`}
            style={{
              border: 0,
              width: "90%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            allowFullScreen={true}
            allow='encrypted-media'>
          </iframe>
        )
      }
    </div>
  )
}

export default CoursePlayer