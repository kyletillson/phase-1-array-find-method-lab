// code your solution here
superbowlWin = (record) => {
    const result = record.find( record => record.result === 'W' );
    return !! result ? result.year : undefined;
    // const sadReality = record.find( record => record.result === 'W' );
    // return sadReality.year undefined;
};

