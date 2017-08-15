# b4

* start app  `gulp`
* start tests  `gulp tests-live`

# show + tell

* introduce app function.
* introduce `Scale.ts` and `app.ts`.
* introduce `js` transpiling.
* show the terminal on side
* introduce intellisense.
* play with scale.toString() and show type checking.
* add a new method to string.

    ```
    public getRoot() : string {
        return Roots[this.root];
    }
    ```

* tests!

    ```
    it ("should have a getRoot method", () => {
        // arrange
        var sut = new Scale(Roots.A, Accidents.b, Alterations.maj );
        // act
        var result = sut.getRoot();
        // assert
        expect(result).toBe("A","string representation of scale does not match spec");
    });
    ```