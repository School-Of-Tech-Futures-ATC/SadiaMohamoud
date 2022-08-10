const {Game}= require ("./game.js")

it('should return 0 for a game of all zeros', () => {
    //arrange 
    const game = new Game();
    const pins = 0; 
    let total_score = 0;
    //act
    for (let i = 0; i < 20; i++) {
        game.roll(0)
    }
    //assert 
    expect(total_score).toBe(0)
})

it('should return 20 for a game of all ones', () => {
    //arrange 
    const game = new Game();
    const pins = 0; 
    let total_score = 20;
    //act
    for (let i = 0; i < 20; i++) {
        game.roll(20)
    }
    //assert 
    expect(total_score).toBe(20)
})














// let game beforeEach(() =>{
//     game = new Game();
// });