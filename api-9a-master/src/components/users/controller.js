async function addUser(params) {
    const {
        auth,
        email,
        password,
        displayName
    } = params;

    const user = await auth.createUser({
        email,
        password,
        displayName
    });

    return user;
}

async function getUser(params) {
    const {
        auth,
        email,
    } = params;

    const user = await auth.getUserByEmail(email);

    return user;
}


async function updateUser(params) {
    const { auth, email, displayName, password } = params;

    const user = await auth.getUserByEmail(email);
    const uid = user.uid;

    if (displayName) {
        await auth.updateUser(uid, { displayName });
    }

    if (password) {
        await auth.updateUser(uid, { password });
    }

    return user;
}

async function deleteUser(params) {
    const { auth, email } = params;

    const user = await getUser({ auth, email })

    const { uid } = user;

    await auth.deleteUser(uid);

    return true;
}



module.exports = {
    addUser,
    getUser,
    updateUser,
    deleteUser
}