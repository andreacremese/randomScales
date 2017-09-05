# b4

* start app  `gulp`.
* start tests  `gulp tests-live`.
* start `code .`.

# show + tell

* introduce app function.
* introduce `Scale.ts` and `app.ts`.
* introduce `js` transpiling.
* introduce `tsconfig.json` and `noImplicitAny`.
* show the terminal on side
* introduce code completion and type inference.
* play with scale.toString() and show type checking.
* show adding comments to the code.
* add a new method to return a string.

    ```
    public getRoot() : string {
        return Roots[this.root];
    }
    ```

* show type checking!
* add a comment
        /**
            * gets only the root of the scale, rather then the full kaboodle!
        */

* tests (and type checking)

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

    
#wrap up

* noImplicitAny
* code completion!