function ListItem({bullet, boldText, liText}) {
    return(
        <div className="flex-box">
              <span className="bullet">{bullet}</span>
              <p className="li-text">
                <b>{boldText}</b> {liText}
              </p>
            </div>
    )
}

export default ListItem;