import React from 'react';

const DownloadDataButton = () => {
  const handleDownload = async () => {

    const data = localStorage.getItem('persist:English');

    if (data) {
      let copydata = await JSON.parse(data)
      copydata = copydata.irregularVerbs
      console.log(copydata)
      const json = JSON.stringify(copydata);
      const blob = new Blob([copydata], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'myData.json';
      link.click();
      URL.revokeObjectURL(url);
    } else {
      console.error('No data to download');
    }
  };


  return (
    <button onClick={handleDownload}>
      Download Data
    </button>
  );
};

export default DownloadDataButton
